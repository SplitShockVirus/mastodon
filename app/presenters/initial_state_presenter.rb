# frozen_string_literal: true

class InitialStatePresenter < ActiveModelSerializers::Model
  attributes :settings, :push_subscription, :token,
<<<<<<< HEAD
             :current_account, :admin, :text, :visibility
=======
             :current_account, :admin, :owner, :text, :visibility,
             :disabled_account, :moved_to_account
>>>>>>> e0e7a09cfed2b311f055522eea45caac0838d87a

  def role
    current_account&.user_role
  end
end
