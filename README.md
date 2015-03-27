# Skeleton Project Rails
**Base to start your project**

It's based on Rails 4.2.1 and Ruby 2.2.1.

## How to use
**First step:** Clone the repository added the name of your project   

    git clone git@github.com:luizpicolo/skeleton-project-rails.git NAME_YOUR_PROJET
    
**Second step:** Rename the files and change the database configuration

    cp config/database.example.yml config/database.yml &&
    cp config/application.example.yml config/application.yml &&
    cp config/secrets.example.yml config/secrets.yml
    
**Third step:** Within of your project, execute this command

    bundle install && rake db:migrate && rake db:seed




