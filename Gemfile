source 'https://rubygems.org'

ruby '2.2.1'

gem 'alert_message'
gem 'bourbon'
gem 'bootstrap-wysihtml5-rails'
gem 'bootstrap-wysihtml5-rails-font-awesome', '~> 0.3.1.25'
gem 'carrierwave'
gem 'carrierwave-ftp', require: 'carrierwave/storage/sftp'
gem 'cancancan'
gem 'coffee-rails', '~> 4.1.0'
gem 'devise'
gem 'figaro'
gem 'htmlcompressor', '~> 0.2.0'
gem 'jbuilder', '~> 2.0'
gem 'jquery-rails'
gem 'jquery-turbolinks'
gem 'mini_magick'
gem 'modernizr-rails'
gem 'neat'
gem 'rails', '4.2.4'
gem 'rails-i18n'
gem 'rails-env'
gem 'rails_admin', git: 'git://github.com/luizpicolo/rails_admin.git'
gem 'randumb'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks'
gem 'uglifier', '>= 1.3.0'
gem 'pg'

group :development, :test do
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'capybara'
  gem 'database_rewinder'
  gem 'email_spec'
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'mina'
  gem 'rspec-rails', '>= 3.1.0'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers'
  gem 'spring'
  gem 'rename'
  gem 'simplecov', require: false
end

group :staging, :production do
  gem 'passenger'
  gem 'therubyracer'
end

group :production do
  gem 'turnout'
end
