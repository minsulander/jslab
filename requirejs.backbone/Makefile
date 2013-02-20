DIST_DIR=dist
MAIN_TARGET=$(DIST_DIR)/index.html
SRC_DIR=web
SRC_FILES=$(shell find $(SRC_DIR) -type f)

.PHONY: all clean

all: $(MAIN_TARGET)

$(DIST_DIR)/index.html: $(SRC_FILES)
	bin/r.js -o app.build.js

clean:
	rm -rf $(DIST_DIR)
	find . -name '*~' -delete
