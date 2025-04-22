#!/bin/bash

# Cleanup the excessively large media directory
# https://chatgpt.com/share/e/6807991e-ba6c-8008-8630-1f750b0c4a9d

# Maximum resolution (Full HD)
MAX_WIDTH=1920
MAX_HEIGHT=1080

# File types to process
IMAGE_EXTENSIONS=("jpg" "jpeg" "png" "bmp" "tiff" "webp")

# Resize function
resize_image() {
    local file="$1"
    # Get image dimensions
    dimensions=$(identify -format "%w %h" "$file" 2>/dev/null)
    if [ $? -ne 0 ]; then
        echo "Skipping unsupported or broken file: $file"
        return
    fi

    width=$(echo "$dimensions" | cut -d' ' -f1)
    height=$(echo "$dimensions" | cut -d' ' -f2)

    # Check if the image is larger than Full HD
    if [ "$width" -gt "$MAX_WIDTH" ] || [ "$height" -gt "$MAX_HEIGHT" ]; then
        echo "Resizing $file ($width x $height)..."
        convert "$file" -resize "${MAX_WIDTH}x${MAX_HEIGHT}>" -quality 85 "$file"
    else
        echo "Compressing $file"
        convert "$file" -quality 85 "$file"
    fi
}

# Main loop
for ext in "${IMAGE_EXTENSIONS[@]}"; do
    find media/ -type f -iname "*.${ext}" | while read -r img; do
        resize_image "$img"
    done
done
