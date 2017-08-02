class StaffCreateMailer < Devise::Mailer
  def confirmation_instructions(record, token, opts={})
    @token = token
    byebug
    super
  end
end
