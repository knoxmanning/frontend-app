import logging
import os
from typing import Dict, List

class Utils:
    def __init__(self):
        self.logger = logging.getLogger(__name__)

    def read_config_file(self, filename: str) -> Dict:
        try:
            with open(filename, 'r') as file:
                config = {}
                for line in file:
                    key_value = line.strip().split('=')
                    if len(key_value) == 2:
                        config[key_value[0]] = key_value[1]
                return config
        except FileNotFoundError:
            self.logger.error(f"Config file '{filename}' not found.")
            return {}

    def get_environment_variables(self) -> Dict:
        return dict(os.environ)

    def filter_list(self, input_list: List, filter_criteria: Dict) -> List:
        filtered_list = []
        for item in input_list:
            if all(item.get(key) == value for key, value in filter_criteria.items()):
                filtered_list.append(item)
        return filtered_list

def main():
    utils = Utils()
    config = utils.read_config_file('config.txt')
    env_vars = utils.get_environment_variables()
    print(config)
    print(env_vars)

if __name__ == "__main__":
    main()