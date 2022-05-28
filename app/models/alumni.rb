class Alumni < ApplicationRecord

    def index
        @alumni = Alumni.all
        render :index
    end

end
