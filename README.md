# H E X L E T : brain-games
[![Actions Status](https://github.com/roman-j123/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/roman-j123/frontend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/77587fcdff55ab245fce/maintainability)](https://codeclimate.com/github/roman-j123/frontend-project-lvl1/maintainability)
[![Status](https://github.com/roman-j123/frontend-project-lvl1/workflows/brain-games/badge.svg)](https://github.com/roman-j123/frontend-project-lvl1/actions)

## about
- **Автор:** Роман Исмагилов
- **Описание:** Игры-разума - это набор консольных игр для развития математического мышления.

## install
1. Склонируйте репозиторий себе на компьютер

`git clone https://github.com/roman-j123/frontend-project-lvl1.git`

2. Перейдите в папку с проектом

`cd frontend-project-lvl1`

3. Установите игру командой:

`make install`

4. Свяжите пакеты командой:

`npm link`

## settings
Можно усложнить игры. Для этого измените значения `MIN_VALUE`, `MAX_VALUE` и `MAX_ROUNDS` в файле `src/index.js`, где:
- `MIN_VALUE` - минимальное начение промежутка
- `MAX_VALUE` - максимальное значение промежутка
- `MAX_ROUNDS` - максимальное количество раундов

## brain-even
**Запуск:** `brain-even`

**Описание:** Вам будет показано случайное число. Необходимо будет ответить **'yes'** - если число четное или **'no'** - если число нечётное.

[![asciicast](https://asciinema.org/a/v2mQRz4ZIFoxo1QOekDLfcYpf.svg)](https://asciinema.org/a/v2mQRz4ZIFoxo1QOekDLfcYpf)

## brain-calc
**Запуск:** `brain-calc`

**Описание:** Вам показывается случайное математическое выражение, например **12 + 26**, которое нужно вычислить и записать правильный ответ.

[![asciicast](https://asciinema.org/a/I33e0BnKTxeZz8B4Tle1WgIsQ.svg)](https://asciinema.org/a/I33e0BnKTxeZz8B4Tle1WgIsQ)

## brain-gcd
**Запуск:** `brain-gcd`

**Описание:** Вам показывается два случайных числа, например, **25 50**. Необходимо вычислить и ввести наибольший общий делитель этих чисел.

[![asciicast](https://asciinema.org/a/wJCHBgXt6xMxb2eCxwO2Hu78g.svg)](https://asciinema.org/a/wJCHBgXt6xMxb2eCxwO2Hu78g)

## brain-progression
**Запуск:** `brain-progression`

**Описание:** Вам показывают ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Необходимо определить это число.

[![asciicast](https://asciinema.org/a/3mcGkdnNOxYWS4r6EgdQRyzQu.svg)](https://asciinema.org/a/3mcGkdnNOxYWS4r6EgdQRyzQu)

## brain-prime

**Запуск:** `brain-prime`

**Описание:** Вам будет показано случайное число. Необходимо будет ответить **'yes'** - если число простое или **'no'** - если число составное.

[![asciicast](https://asciinema.org/a/830W6lxf886MK8j9hCPCeBv4Z.svg)](https://asciinema.org/a/830W6lxf886MK8j9hCPCeBv4Z)