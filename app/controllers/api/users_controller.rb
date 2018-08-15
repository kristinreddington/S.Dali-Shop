class Api::UsersController < ApiController


  def create
    user = User.new(params.permit(:email, :password))
    if user.save
      :ok
    else
      :bad_request
    end
  end

  private

  #def set_user
    #@user = User.find_by()
  #end

    #def user_params
      #params.require(:user).permit(:email, :password)
    #end
end
