import subprocess


class Server(object):
    def __init__(self):
        self._process = None

    @property
    def process(self):
        p = self._process
        if not p:
            p = subprocess.Popen(
                ['node', 'ssr.js'],
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                universal_newlines=True,
            )
            self._process = p
        return p

    def render(self, app_name):
        process = self.process
        process.stdin.write(app_name)
        process.stdin.flush()
        stdout_data = process.stdout.readline()
        # stderr_data = process.stderr.read()
        # stdout_data, stderr_data = process.communicate(app_name)
        # if stderr_data:
        #     raise Exception(stderr_data)
        return stdout_data


server = Server()


def render(app_name):
    return server.render(app_name)


if __name__ == '__main__':
    print('RENDER:')
    print(render('home'))
