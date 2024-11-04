# frozen_string_literal: true

class Admin::SessionsController < Devise::SessionsController
  def create
    params[:admin_user][:username] = "admin_#{params[:admin_user][:username]}"
    request.params[:admin_user].merge!(params.require(:admin_user).permit(:username))
    super
  end
end