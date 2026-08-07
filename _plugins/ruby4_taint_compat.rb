# frozen_string_literal: true

# Ruby 4 removed Object#tainted? and Object#untaint. Liquid still calls tainted?
# This plugin adds a no-op tainted? implementation for String and Object to
# restore compatibility for older gems that have not been updated yet.

class Object
  def tainted?
    false
  end
end

class String
  def tainted?
    false
  end
end
