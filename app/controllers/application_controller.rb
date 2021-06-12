class ApplicationController < ActionController::Base
  before_action :configurte_permitted_parameters, if: :devise_controller?

  private
  def configurte_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_un, key: [:email])
  end
end
