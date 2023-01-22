FILES = $(shell ../front-backup; stat -l -t "%F %T %z" * | tail -1)

deploy:
	./deploy.sh

rollback:
	echo	$(shell ls)