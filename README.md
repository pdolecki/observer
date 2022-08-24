Wzorzec obserwator często wykorzystywany, szczególnie przy reaktywnym programowaniu. Zakładam, że większość osób wykorzystuje go na codzień, przy czym może nie mieć świadomości, że właśnie z niego korzystają.

W naszym przykładzie posiadamy 2 komponenty oraz 1 serwis. Pierwszy komponent – „query” odpowiedzialny jest za przekazywanie danych wprowadzanych do inputa. Dugi komponent – „message” subskrybuje strumień danych w serwisie i na podstawie zwrotek wyświetla odpowiedni element z toDo listy. Serwis zajmuje się wykonywaniem zapytań oraz przekazywaniu ich po otrzymaniu numeru elementu toDo do zrobienia.

Przykład wydaje się wręcz trywialny, nie mniej świtnie obrazuje przykład jak nieświadomie korzystamy z tego(a niekiedy i innych) wzorca – w naszej aplikacji posiadamy strumień danych(dane wprowadzane do inputa), który jest przez nas obserwowany i gdy zachodzą w nim zmiany – regaujemy uruchamiając serwis, a następnie czekając na zwrotkę z zapytania http jakie on wykona.
