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
bundle install
bundle update
bundle exec jekyll serve --trace --incremental --livereload
```
