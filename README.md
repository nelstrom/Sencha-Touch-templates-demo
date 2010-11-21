This Git repository includes all of the source code used in creating a two part tutorial about [templates in Sencha Touch][1] ([part 1][1] and [part 2][2]).

Each of the links below represents a snapshot of the code at a point in the video (timestamps are in brackets). You'll find instructions below on how to check out each snapshot from this git repository.

* [00_blank_slate][00]

# PART ONE

* [01_constructing_templates][01] (1:17)
* [02_placeholders][02] (2:04)
* [03_formatting_functions][03] (2:40)
* [04_looping][04] (5:38)
* [05_nested_loops][05] (6:45)
* [06_conditionals][06] (8:25)
* [07_numbering][07] (9:10)
* [08_index_and_size][08] (11:12)
* [09_parent_object][09] (11:47)

# PART TWO

* [10_member_functions][10] (2:59)
* [11_sharing_member_functions][11] (3:35)
* [12_xtemplate_from_DOM][12] (7:18)
* [13_serve_with_sinatra][13] (8:56)
* [14_template_files][14] (9:34)

## Using this repository to follow the screencast

First, you'll have to clone this repository:

    git clone git://github.com/nelstrom/Sencha-Touch-templates-demo.git

Change into the directory:

    cd Sencha-Touch-templates-demo

By default, the git clone command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git checkout -b 00_blank_slate origin/00_blank_slate
    git checkout -b 01_constructing_templates origin/01_constructing_templates
    git checkout -b 02_placeholders origin/02_placeholders
    git checkout -b 03_formatting_functions origin/03_formatting_functions
    git checkout -b 04_looping origin/04_looping
    git checkout -b 05_nested_loops origin/05_nested_loops
    git checkout -b 06_conditionals origin/06_conditionals
    git checkout -b 07_numbering origin/07_numbering
    git checkout -b 08_index_and_size origin/08_index_and_size
    git checkout -b 09_parent_object origin/09_parent_object
    git checkout -b 10_member_functions origin/10_member_functions
    git checkout -b 11_sharing_member_functions origin/11_sharing_member_functions
    git checkout -b 12_xtemplate_from_DOM origin/12_xtemplate_from_DOM
    git checkout -b 13_serve_with_sinatra origin/13_serve_with_sinatra
    git checkout -b 14_template_files origin/14_template_files

You can review the list of local branches by running:

    git branches

And you can switch between branches with the checkout command. For example, to check out the `03_generated_golden_spiral` branch, run:

    git co 12_xtemplate_from_DOM


[1]: http://vimeo.com/16289757
[2]: http://vimeo.com/16289990

[00]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/00_blank_slate
[01]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/01_constructing_templates
[02]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/02_placeholders
[03]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/03_formatting_functions
[04]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/04_looping
[05]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/05_nested_loops
[06]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/06_conditionals
[07]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/07_numbering
[08]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/08_index_and_size
[09]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/09_parent_object
[10]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/10_member_functions
[11]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/11_sharing_member_functions
[12]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/12_xtemplate_from_DOM
[13]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/13_serve_with_sinatra
[14]: https://github.com/nelstrom/Sencha-Touch-templates-demo/tree/14_template_files
