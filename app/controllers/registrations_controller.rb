class RegistrationsController < ApplicationController
  def create
    begin
      user = User.create!(
        email:params['user']['email'],
        password: params['user']['password'],
        password_confirmation: params['user']['password_confirmation']
      )
      session['user_id'] = user.id
      render json: {
        status: :created,
        user: user.as_json(include: :comicsofUser)
      }
    rescue => e
      render json: { status: 500, error: "User Already Registered" }
    end
  end
end
