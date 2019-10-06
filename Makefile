functions:
	$(info ${GREEN}Preparing Firebase Functions${RESET})
	cd back && firebase deploy --only functions 

site:
	$(info ${GREEN}Deploying site${RESET})
	cd farmera && ionic build
	rsync -av farmera/www/* back/public
	rm -r farmera/www
	cd back && firebase deploy --only hosting

run:
	$(info ${GREEN}DEV mode${RESET})
	cd farmera && ionic serve

GREEN  := $(shell tput -Txterm setaf 2)
RESET  := $(shell tput -Txterm sgr0)