# Tools

Environment:
```
export GEM_HOME="$HOME/.gem"
path+=("$GEM_HOME/bin")
export PATH
```

Setup [Bundler](https://bundler.io/) and so forth:
```
gem install bundler
```

I'm testing out the [just-the-docs](https://pmarsceill.github.io/just-the-docs/) theme.


# Build

```
# rm Gemfile.lock
bundle install

bundle update

bundle exec just-the-docs rake search:init
bundle exec jekyll serve
```
