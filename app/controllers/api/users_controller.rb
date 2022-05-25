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
        @users = User.where('first_name LIKE :search
                            OR last_name LIKE :search
                            OR industry LIKE :search',
                            {search: "#{search}%"})
        render :index
        # debugger
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :personal_email)
    end
end
