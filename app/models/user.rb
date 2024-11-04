class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  enum role: { admin: 0, client: 1}

  validates :username, uniqueness: { case_sensitive: true }, presence: true
  validates :password, length: { in: 6..18, message: :length_limit }, if: :password
end
