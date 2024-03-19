from threading import Timer


class UserState:
    result = None
    i = 0

class SimplState:
    user_states = {}
    timers = {}

    def get_state(self, msg):
        return self.user_states[msg.from_user.id]

    def add_state(self, msg, res=None, i=0):
        # if self.timers[msg.from_user.id]:
        #     self.timers[msg.from_user.id].cancel()

        # t = Timer(60*5, self.remove_state, args=[msg])
        # t.start()
        # self.timers[msg.from_user.id] = t
        
        state = UserState()
        state.result = res
        state.i = i

        self.user_states[msg.from_user.id] = state

    def remove_state(self, msg):
        # self.timers[msg.from_user.id].cancel()
        # self.timers.pop(msg.from_user.id, None)

        self.user_states.pop(msg.from_user.id, None)