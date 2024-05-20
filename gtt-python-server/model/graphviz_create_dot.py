import os

def generate_dot(root_dir, output_dir, max_depth=2, exclude_dirs=None):
    if exclude_dirs is None:
        exclude_dirs = ['node_modules', 'dist', 'build', '.git', 'upload', '.idea', '.vscode', 'venv', 'public', 'players', 'teams', '.gradle', 'gradle', '.DS_Store','controller','DTO','entity','repository','service','config','filter','handler','util','domain','Entity','formatter','advice']

    # Ensure output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Generate a separate DOT file for each main subdirectory
    for main_dir in os.listdir(root_dir):
        main_dir_path = os.path.join(root_dir, main_dir)
        if os.path.isdir(main_dir_path) and main_dir not in exclude_dirs:
            dot_output = ['digraph G {', '  rankdir=LR;', '  node [shape=folder];']
            if main_dir == 'gtt-api-server':
                specific_dir_path = os.path.join(main_dir_path, 'src/main/java/com/sorune/gttapiserver')
                for dirpath, dirnames, filenames in os.walk(specific_dir_path):
                    # Filter out excluded directories
                    dirnames[:] = [d for d in dirnames if d not in exclude_dirs]

                    # Calculate the depth of the current directory
                    depth = len(os.path.relpath(dirpath, specific_dir_path).split(os.sep))
                    if depth > 1:
                        continue

                    parent_dir = os.path.relpath(dirpath, root_dir)
                    parent_dir = parent_dir.replace("\\", "/")

                    dot_output.append(f'  "{parent_dir}";')

                    if depth <= 1:
                        for dirname in dirnames:
                            child_dir = os.path.join(parent_dir, dirname).replace("\\", "/")
                            dot_output.append(f'  "{parent_dir}" -> "{child_dir}";')

            else:
                for dirpath, dirnames, filenames in os.walk(main_dir_path):
                    # Filter out excluded directories
                    dirnames[:] = [d for d in dirnames if d not in exclude_dirs]

                    # Calculate the depth of the current directory
                    depth = len(os.path.relpath(dirpath, main_dir_path).split(os.sep))
                    if depth > max_depth:
                        continue

                    parent_dir = os.path.relpath(dirpath, root_dir)
                    parent_dir = parent_dir.replace("\\", "/")

                    dot_output.append(f'  "{parent_dir}";')

                    if depth < max_depth:
                        for dirname in dirnames:
                            child_dir = os.path.join(parent_dir, dirname).replace("\\", "/")
                            dot_output.append(f'  "{parent_dir}" -> "{child_dir}";')

            dot_output.append('}')

            output_file = os.path.join(output_dir, f'{main_dir}.dot')
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write("\n".join(dot_output))

root_directory = "C:/Users/zkskt/Desktop/Develope/ReactProject"
output_directory = 'dot_files'
generate_dot(root_directory, output_directory, max_depth=2)
