# frozen_string_literal: true

class AdminDomainConstraint
  def matches?(request)
    domains = Rails.cache.fetch('domain_for_admin', expires_in: 7.days) do
      Domain.active.admin.pluck(:name)
    end
    domains.include?(request.domain&.downcase)
  end
end