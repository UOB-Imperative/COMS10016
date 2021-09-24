

```bash

curl -sSL https://get.haskellstack.org/ | sh

```



You will be asked for your root password for ```sudo``` purposes (approx. 2 times).



(This is in order to use your platform's package manager to install dependencies and to install to `/usr/local/bin`.)



> Note: you may need to add ```~/.local/bin``` to your PATH variable. You can do this with the following terminal command: `PATH=$PATH:~/.local/bin`.



> Note: if you out of disk space, delete `.stack`. This is a hidden file that you can see using `ls -a`, and delete using `rm -fr .stack`



If you have any further issues, try checking these [FAQs](https://docs.haskellstack.org/en/stable/faq/). The Teaching Assistants (TAs) will also be there in the first lab to help you with this, but ultimately we can only guarantee support on the lab machines.



## Using GHCi



You can run the haskell "GHCi" interpreter with



```bash

stack ghci

```



## Using GHCi with QuickCheck



To use the interpreter with the QuickCheck package run:



```bash

stack ghci --package QuickCheck

```



## Interpreting a Haskell File



If you want to interpret a Haskell file, just add the file as a final argument to your stack command like this:



```bash

stack ghci File.hs

stack ghci --package QuickCheck File.hs

```



(the first command when you don't need QuickCheck, the second command when you do)



## Compiling a Haskell File



If you want to compile a Haskell file, just add the file as a final argument to your stack command like this:



```bash

stack ghc File.hs

stack ghc --package QuickCheck File.hs

```



(the first command when you don't need QuickCheck, the second command when you do)

