x = "hello"

Thread.new {
  File.write('./foo.tmp', 'a long string of characters to write to the file')
  x = "HAHA"
}


100.times do
  print x + ', '
end
