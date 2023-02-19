import { simpleGit, SimpleGit, CheckRepoActions } from "simple-git";
import { Remote } from "../stores/gitStore";

class GitConnector {
  private _git: SimpleGit;
  private _isRepo: boolean;
  private _remoteUrls: Remote[];

  constructor() {}

  async init(rootPath: string, callback?: () => void) {
    this._git = simpleGit(rootPath);
    this._isRepo = await this._git.checkIsRepo(CheckRepoActions.IS_REPO_ROOT);
    this._remoteUrls = [];

    callback && callback.bind(this)();
  }

  async initRepo() {
    await this._git.init();
  }

  async getStatus() {
    const statusSummary = await this._git.status();

    return statusSummary;
  }

  get isRepo() {
    return this._isRepo;
  }

  async addRemote(remoteName: string, url: string) {
    await this._git.addRemote(remoteName, url);

    this._remoteUrls.push({ name: remoteName, url });
  }

  async addFiles(fileNames: string[]) {
    await this._git.add(fileNames);
  }

  async removeFiles(fileNames: string[]) {
    await this._git.rmKeepLocal(fileNames);
  }

  async commit(message: string) {
    await this._git.commit(message);
  }
}

const gitConnector = new GitConnector();

export default gitConnector;
