#!/usr/bin/env python

import cgi
import cgitb; cgitb.enable()

print 'Content-type: text/html'
print
print '''
<html>
'''

msg = 'bananas!'

print '''
%s
''' % cgi.escape(msg)

print '''
</html>
'''

