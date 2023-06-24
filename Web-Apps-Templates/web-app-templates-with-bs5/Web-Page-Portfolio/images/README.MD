# Images

# Working with Images in the Command Line

# Check the size of an image in a directory, `sample-image.jpg` using the `du` command
* `du` command is used to display the disk usage of a file or directory. To use the `du` command to check the size of an image, you would use the following syntax:
  
    ```sh
        # check the size of an image in a directory
        du -h sample-image.jpg
    ```
* The `-h` option tells the du command to display the size in human-readable format
* To use the `ls` command to check the size of an image, you would use the following syntax:

    ```sh
        # using the `ls` command to check the size of an image
        ls -lh sample-image.jpg # Output: -rw-r--r-- 1 Rodgers Nyangweso 197121 200K May 28 17:18 tech-img-1.png
    ```

# Using Command Line to Convert Image Size
* The `convert` command is part of the __ImageMagick software__, which is a free and open-source software suite for image manipulation.
* To resize an image using the `convert` command, open a terminal window and navigate to the directory where the image is located. Then, type the following command:

    ```sh
        # resize image to 1920 pixels wide and 1080 pixels high
        # The resized image will be saved as resized_sample_image.jpg in the same directory as the original image.
        convert sample-image.jpg -resize 1920*1080 resized_sample_image.jpg
    ```

# Using `bash` command to print out image sizes in the current directory
```sh
    find . -type f -iname "*.jpg" -exec du -b {} +
```

* The `-type f` option tells the find command to only find files. 
* The `-iname "*.jpg"` option tells the find command to only find files with the `.jpg `extension. 
* The `-exec du -b {} +` option tells the find command to execute the `du` command for each file that is found. The `du` command will print out the size of each file in bytes.