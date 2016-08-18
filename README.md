# Skeleton Project Rails

Base to start your project

**This is work in progress**

It's based on Rails 5.0.0 and Ruby 2.3.1.

## How to use

**First step:** Clone the repository adding the name of your project

    git clone git@github.com:luizpicolo/skeleton-project-rails.git

**Second step:** Rename the files and change the database configuration

    cp config/database.example.yml config/database.yml &&
    cp config/application.example.yml config/application.yml &&
    cp config/secrets.example.yml config/secrets.yml

**Third step:** Within of your project, execute this command

    bundle install && rails db:create && rails db:migrate && rails db:seed

**Final step:** Rename your project

    rails g rename:app_to NEW_NAME
______
Created with <3 by [Luiz Picolo](https://github.com/luizpicolo)
and [Gabriel Medina](https://github.com/gabrielmedina)
