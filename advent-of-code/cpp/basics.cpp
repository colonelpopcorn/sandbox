#include <stdio.h>
#include <string>

class Greeter {
    std::string Name;
    public:
        Greeter(std::string Name) { this->Name = Name; }
        std::string getName() { return this->Name; }
        void greet() {
            std::string finalStr = std::string("Hello ") + this->Name + std::string("!");
            printf("%s", finalStr.c_str());
        }
};

int main(int argc, char const *argv[])
{
    printf("Hello, world!\n");
    Greeter greeter("Jonathan");
    greeter.greet();
    return 0;
}
