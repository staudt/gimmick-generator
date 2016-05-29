
filenames = ['firstNames', 'secondNames', 'famousWrestlers', 'categories', 'jobs']

for filename in filenames:
	with open('%s.csv' % filename, 'r') as f:
		namelist = []
		for name in f.read().split('\n'):
			if len(name)>1: namelist.append(name)
		with open('../js/%s.js' % filename, 'w') as dest_f:
			dest_f.write('%s = %s;' % (filename, namelist))