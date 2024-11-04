class CreateDomains < ActiveRecord::Migration[7.0]
  def change
    create_table :domains do |t|
      t.string :name
      t.integer :genre, default: 0
      t.integer :status, default: 0
      t.timestamps
    end
  end
end
