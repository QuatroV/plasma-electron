export const TEST_PROGRAM = `        global    _main                ; declare main() method
extern    _printf              ; link to external library

segment  .data
message: db   'Hello world', 0xA, 0  ; text message
            ; 0xA (10) is hex for (NL), carriage return
            ; 0 terminates the line

; code is put in the .text section
section .text
_main:                            ; the entry point! void main()
push    message           ; save message to the stack
call    _printf           ; display the first value on the stack
add     esp, 4            ; clear the stack
ret                       ; return`;
