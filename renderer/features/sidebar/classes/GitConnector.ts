import { simpleGit, SimpleGit, CheckRepoActions } from "simple-git";

class GitConnector {
  private _git: SimpleGit;
  private _isRepo: boolean;

  constructor() {}

  async init(rootPath: string, callback?: () => void) {
    this._git = simpleGit(rootPath);
    this._isRepo = await this._git.checkIsRepo(CheckRepoActions.IS_REPO_ROOT);

    callback && callback.bind(this)();
  }

  async initRepo() {
    await this._git.init();
  }

  async getDiff() {
    const gitDiff = await this._git.diff();

    return gitDiff;
  }

  get isRepo() {
    return this._isRepo;
  }
}

const gitConnector = new GitConnector();

export default gitConnector;
