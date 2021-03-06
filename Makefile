install:
	npm install

build:
	npm run build

run:
	npm start

lint:
	npx eslint src --ext .ts,.tsx && npx prettier --check .

lint-fix:
	npx eslint src --ext .ts,.tsx --fix && npx prettier --write .
