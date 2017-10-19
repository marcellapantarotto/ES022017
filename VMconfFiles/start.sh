#!/bin/bash

export PATH=$PATH:/home/headshot/bin:/home/headshot/.local/bin:/home/headshot/.nvm/versions/node/v8.7.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin

source ~/.nvm/nvm.sh
nvm install v8.7.0
exitCode=0
case $1 in
	start)
		forever start /srv/headshot/app-backend/index.js
		exitCode=$?
	;;
	stop)
		forever stop /srv/headshot/app-backend/index.js
		exitCode=$?
	;;
	*)
		echo "Use $0 {start | stop}"
	;;
esac

exit $exitCode
