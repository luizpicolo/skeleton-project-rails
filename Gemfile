source 'https://rubygems.org'

ruby '2.3.1'

gem 'alert_message'
gem 'bourbon'
gem 'bootstrap-wysihtml5-rails'
gem 'bootstrap-wysihtml5-rails-font-awesome'
gem 'carrierwave'
gem 'carrierwave-ftp', require: 'carrierwave/storage/sftp'
gem 'cancancan'
gem 'coffee-rails'
gem 'devise'
gem 'devise-i18n'
gem 'figaro'
gem 'htmlcompressor'
gem 'jbuilder'
gem 'jquery-rails'
gem 'jquery-turbolinks'
gem 'mini_magick'
gem 'modernizr-rails'
gem 'neat'
gem 'rails', '>= 5.0.0'
gem 'rails-i18n'
gem 'rails-env'
gem 'remotipart', github: 'mshibuya/remotipart'
gem 'rails_admin', github: 'luizpicolo/rails_admin'
gem 'rails_admin-i18n'
gem 'randumb'
gem 'sass-rails'
gem 'turbolinks'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'uglifier'
gem 'pg'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'binding_of_caller'
  gem 'capybara'
  gem 'database_rewinder'
  gem 'email_spec'
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'puma', '~> 3.0'
  gem 'rspec-rails'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'simplecov', require: false
end

group :development do
  gem 'better_errors'
  gem 'listen', '~> 3.0.5'
  gem 'web-console'
  gem 'mina'
  gem 'rename'
end

group :staging, :production do
  gem 'passenger'
  gem 'therubyracer'
end

group :production do
  gem 'turnout'
end
