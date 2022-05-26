class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render :index
    end

    def show
       @user = User.find(params[:id])
       render :show 
    end
    
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end
    
    def search
        search = params[:search]
        if search.length == 1 #I know I'm looking at a fragment or an industry name
            search = search[0]
            @users = User.where('first_name LIKE :search
                            OR last_name LIKE :search
                            OR industry LIKE :search',
                            {search: "#{search}%"})
        elsif search.length == 2 #I know that I'm looking at a first and last name
            @users = User.where('first_name = ? 
                            AND last_name = ?', 
                            search[0], search[1])
        else #I know that I'm looking at first, last names and industry
            @users = User.where('first_name = ?
                            AND last_name = ?
                            AND industry = ?',
                            search[0], search[1], search[2])
        end
        # debugger
        render :index
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :personal_email)
    end
end
