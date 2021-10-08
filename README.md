# react-dynamic-forms

## 1. Email id validation regular expression

(Email Id)

```
/^\w+([-+.']\w+)_@\w+([-.]\w+)_\.\w+([-.]\w+)\*$/
```

(free/domain specific email id)

```
/^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w- ]+\.)+[\w-]{2,4})?$/
```

## 2. URL validation regular expression

(with or without http)

```
/(http(s)?://)?([\w-]+\.)+[\w-]+[.com]+(/[/?%&=]\*)?/
```

( valid everywhere)

```
/((www\.|(http|https|ftp|news|file)+\:\/\/)[_.a-z0-9-]+\.[a-z0-9\/_:@=.+?,##%&~-]\*[^.|\'|\# |!|\(|?|,| |>|<|;|\)])/
```

## 3. Password strength validation regular expression

(only contains letter [a-z] digits[0-9], special characters(@#$%&))

```
/ ^[a-z0-9\.@#\$%&]+$/
```

(Minimum 8 characters at least 1 Alphabet and 1 Number)

```
/ ^(?=._[A-Za-z])(?=._\d)[A-Za-z\d]{8,}$/
```

(Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character)

```
/ ^(?=._[a-z])(?=._[A-Z])(?=._\d)(?=._[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
```

(Minimum 8 and Maximum 10 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character)

```
/ ^(?=._[a-z])(?=._[A-Z])(?=._\d)(?=._[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/
```

(Minimum length 7 and Maximum length 16 Characters allowed [a–z] [A-Z] [0-9])

```
/ ^[a-zA-Z0-9\s]{7,16}$/
```

## 4. Mobile number validation regular expression

(without +91 or 0)

```
/ ^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1}){0,1}9[0-9](\s){0,1}(\-){0,1}(\s){0,1}[1-9]{1}[0-9]{7}$/
```

(with or without +91 or 0)

```
/^((\\+91-?)|0)?[0-9]{10}$/
```

(split the number and the country code)

```
^((\\+|00)(\\d{1,3})[\\s-]?)?(\\d{10})$/
```

## 5. String pattern validation regular expression

```
/(?s)^((?!manish).)_$/
```

(string contains manish)

```
\d/
```

(at list one digit )

```
/(.)_(\\d)(.)\* /
```

(contains number)

```
/^\d$/
```

(contains only number )

```
/^\d{11}$/
```

(contains only 11 digit number )

```
/^[a-zA-Z]+$/
```

(contains only letter )

```
/^[a-zA-Z0-9]+$/
```

(contains only letter and number )
