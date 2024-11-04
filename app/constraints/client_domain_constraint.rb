# frozen_string_literal: true

class ClientDomainConstraint
  def matches?(request)
    domains = Rails.cache.fetch('domain_for_client', expires_in: 7.days) do
      Domain.active.client.pluck(:name)
    end
    domains.include?(request.domain&.downcase)
  end
end