class AddSalary < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :inferred_salary, :string
  end
end
