//接口的兼容性
var EventType;
(function (EventType) {
    EventType[EventType["MouseEvent"] = 0] = "MouseEvent";
})(EventType || (EventType = {}));
// 属性多的能赋给属性少的
// MouseEvent 属性 time pageX pageY
// Event      属性 time
function addEventListener(eventType, handle) { }
;
addEventListener(EventType.MouseEvent, function (event) {
});
