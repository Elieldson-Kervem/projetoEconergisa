```plantuml
@startuml
    skinparam backgroundColor #EEEBDC
    skinparam handwritten true
    user 
    User -> "login()" : email & password
    "login()" -> Customer : session token
    activate "login()"
    Customer -> "placeOrder()" : email token, order info
    "placeOrder()" -> User : ok
    Customer -> "logout()"
    "logout()" -> User : ok
    deactivate "login()"

     User -> "Register()" : username & password & codeEmail & email
    "Register()" -> user : session token
    activate "login()"
    Customer -> "placeOrder()" : email token, order info
    "registred()" -> User : ok
       

    calculateCosume -> "calculate(potency*time/100) : Number

  

    
@enduml
```