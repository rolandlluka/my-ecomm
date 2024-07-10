Rails.configuration.stripe = {
  publishable_key: Rails.application.credentials.dig(:stripe, :stripe_publish_key),
  secret_key: Rails.application.credentials.dig(:stripe, :stripe_secret_key)
}
Stripe.api_key = Rails.application.credentials.dig(:stripe, :stripe_secret_key)