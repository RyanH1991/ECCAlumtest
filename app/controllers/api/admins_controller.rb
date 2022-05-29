class Api::AdminsController < ApplicationController
    def index
        @admins = Admin.all
        render :index
    end
end
