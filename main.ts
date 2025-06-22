//% color="#AA278D" block="Computermusik"
namespace meineErweiterung {

    // Block 1: Hallo World Block
    //% block="hallo Musikapp"
    export function sagHallo(): void {
        basic.showString("Hallo Welt");
    }

    // Block 2: +1000 und Webserial senden
    //% block="sende $wert an die Musikapp"
    export function sendeWert(wert: number): void {
        let neuerWert = wert + 1000;
        serial.writeLine("Gesendeter Wert: " + neuerWert);
    }


        /**
     * Sende eine Zahl über die serielle Schnittstelle im AMBAR-Format.
     * @param value die Zahl, die gesendet werden soll
     * @param channel der Kanal (A-E) über den gesendet wird
     */
    //% block="sende Zahl %value an Kanal %channel"
    //% value.min=0 value.max=1000
    //% color=#cd7f32 weight=100
    export function sendNumber(value: number, channel: Channel): void {
        serial.setBaudRate(BaudRate.BaudRate57600)  // Baudrate auf 57600 setzen:contentReference[oaicite:0]{index=0}
        let chLetter = channelToLetter(channel)
        serial.writeString("s" + chLetter + value + "e")
    }

    
}
