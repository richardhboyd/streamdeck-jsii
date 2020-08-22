import os
os.path.realpath(os.path.dirname(__file__))
from acme.hello_jsii import HelloJsii

def main():
    hello = HelloJsii()
    print(hello.say_hello("Richard"))

if __name__ == "__main__":
    main()
