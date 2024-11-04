# frozen_string_literal: true

class Domain < ApplicationRecord
  enum genre: { admin: 0, client: 1 }
  enum status: { inactive: 0, active: 1, abandoned: 2 }
end