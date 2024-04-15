## 微前端开发模板  monorepo + git submodule 模式

### 代码拉取

```bash
# ssh 协议
git clone --single-branch --branch monorepo-gitmodules git@github.com:zouzhixiang/micro-frontend-template.git

git submodule update --init

注意!!! 代码初始化拉下来后，每个子模块指向的是最新的 commit id，开发时需要先手动切换下分支
```

### 子模块代码提交

```bash
先在子模块目录下走 提交 或者 merge 流程, 保证 dev 分支是最新代码后

在父目录下走 提交 流程, 保证主模块下的子模块指向的是子模块仓库代码最新的 commit id
```

### 子模块更新

```bash
# 在子模块目录下
git pull
```

```bash
# 在父目录下
git submodule update --remote

注意!!! 代码更新后，子模块指向的是最新的 commit id，开发时需要先手动切换下分支
```

### 新增子模块

```bash
# 在父目录下
git submodule add -b 分支名 <remote repository> <local path>
```

### 删除子模块

```bash
# 在父目录下
git submodule deinit packages/子模块名

git add .gitmodules

git rm --cached packages/子模块名

rm -rf .git/modules/packages/子模块名

git commit -m 'remove submodule'

rm -rf rpackages/子模块名

git push
```

### 安装依赖

```bash
# 在父目录下
# 没有pnpm的先安装pnpm: npm install pnpm@7.33.5 -g

pnpm install

# 在父目录下安装多个子模块的通用依赖
pnpm add package-name -S

# 在子模块目录下安装子模块独有的依赖
cd packages/xxx
pnpm add package-name -S

# 或者在父目录下安装子模块独有的依赖 <package_selector> 指的是子模块 package.json 里面的 name
pnpm add package-name --filter <package_selector>  -S

# 其他 pnpm 的命令操作请查看官方文档 https://pnpm.io/zh/
```