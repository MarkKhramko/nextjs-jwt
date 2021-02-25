const EventBus = {
	on(event, callback) {
		document.addEventListener(event, e => callback(e.content));
	},
	dispatch(event, data) {
		document.dispatchEvent(new CustomEvent(event, { content: data }));
	},
	remove(event, callback) {
		document.removeEventListener(event, callback);
	}
};

export default EventBus;