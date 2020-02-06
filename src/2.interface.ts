interface Speakable {
    name: string;
    speaker(name: string): string;
}

//接口的兼容性

enum EventType {
    MouseEvent
}

interface Event {
    time: number;
}

interface MouseEvent extends Event {
    pageX: number;
    pageY: number;

}

// 属性多的能赋给属性少的
// MouseEvent 属性 time pageX pageY
// Event      属性 time
function addEventListener(eventType: EventType, handle: (event: Event) => void) { };

addEventListener(EventType.MouseEvent, (event: MouseEvent) => {

})

export { }